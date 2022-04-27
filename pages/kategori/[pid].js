import { useState, useEffect } from "react"
import Templates from "../../compnents/templates"
import { useRouter } from 'next/router'
// import { eventually } from "pos/lexicon";
import Router from 'next/router';
import { Modal, Button } from 'react-bootstrap';
export default function Kategori() {
    const [value, setValue] = useState({
        kategori: '',
        kode: '',
        gambar: '',
    });
    const [show, setShow] = useState(false);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [error, setError] = useState();
    const [modal, setModal] = useState(false);
    const router = useRouter();
    const { pid } = router.query;
    const handleChange = (e) => {
        setError(true);
        setValue(
            {
                ...value,
                [e.target.id]: e.target.value,
            },
        );
        if ([e.target.id] !== '') {
            setError(false);
        }
        if (e.target.id == 'kode') {
            setModal(true);
            console.log('asdads' + modal);
        }
        if (e.target.id == 'gambar') {
            if (e.target.files[0]['type'] === 'image/jpeg' || e.target.files[0]['type'] === 'image/png') {
                console.log(e.target.files);
                const i = e.target.files[0];
                setCreateObjectURL(URL.createObjectURL(i));
            } else {
                alert('jenis file tidak di dukung');
            }
        }
    }


    useEffect(() => {
        if (pid == 'edit') {
            setValue({
                kategori: 'asd',
                kode: 'sa',
                gambar: '',
            });
        } else {
            setValue({
                kategori: '',
                kode: '',
                gambar: '',
            });
        }
    }, [error]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = new FormData();
        console.log('asdsad' + e.target.files);
        setError(false);
        if (pid == 'edit') {

            fetch('/api/edit', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: body,

            }).then(response => {
                console.log(response);
            }).catch(err => {
                console.log(response);

            });

        } else {

            fetch('/api/item', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
            }).then(response => {
                console.log(response);
            }).catch(err => {
                console.log(response);

            });
        }

    }

    return (
        // Template()
        <Templates container={
            <>

                <div className="card">
                    <div className="card-header">
                        <div className="card-title"> {pid == 'add' ? 'Tambah data kategori' : 'Edit data kategori'}</div>
                    </div>
                    <div className="card-body">
                        <div className="card-sub">
                            This is the basic table view of the ready dashboard :
                        </div>
                        <form action="" method="post" onSubmit={handleSubmit} >
                            <div className="form-group row">
                                <label className="col-md-2">Kategori</label>
                                <div className="col-md-4">
                                    <input type="text" onChange={handleChange} id="kategori" className="form-control" value={value.kategori} />
                                    {error ? 'Silahkan isi' : ''}
                                </div>
                                <label className="col-md-2">Kode Kategori</label>
                                <div className="col-md-4">
                                    <input type="text" onChange={handleChange} id="kode" className="form-control" value={value.kode} />
                                    {error ? 'Silahkan isi' : ''}

                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-2">Gambar</label>
                                <div className="col-md-4">
                                    <img src={createObjectURL} />

                                    <input type="file" onChange={handleChange} id="gambar" className="form-control" value={value.gambar} />
                                    {error ? 'Silahkan isi gambar' : ''}
                                </div>
                            </div>
                            <div className="form-group row">
                                <button className="btn btn-primary" type="submit">Simpan </button>
                                &nbsp; <button className="btn btn-danger" type="reset">Cancel </button>


                            </div>

                        </form>

                    </div>
                </div>

                {/* {modal ? (<Modal open={true} />) : ''} */}
                <Kl open={true} />

            </>

        } />
    );

}


function Kl({ open }) {


    const onHide = () => {

    }
    return (
        <>
            <Modal show={true} onHide={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}


// export const getStaticProps = async (context) => {
//     const filePath = buildFeedbackPath();
//     const data = await extractFileData(filePath);
//     return {
//         props: {
//             data,
//         },
//     };
// };