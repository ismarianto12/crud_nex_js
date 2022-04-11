import Templates from "../../compnents/templates"
import { useRouter } from 'next/router'

export default function Kategori() {
    const router = useRouter()
    const { pid } = router.query
    return (
        // Template()
        <Templates container={
            <>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title"> {pid == 'add' ? 'Tambah data kategori' : 'Edit data kategori'}</div>
                        </div>
                        <div className="card-body">
                            <div className="card-sub">
                                This is the basic table view of the ready dashboard :
                            </div>
                            <form action="" method="post">
                                <div className="form-group row">
                                    <label className="col-md-2">Kategori</label>
                                    <div className="col-md-4">
                                        <input type="text" name="kategori" className="form-control" />
                                    </div>
                                    <label className="col-md-2">Kode Kategori</label>
                                    <div className="col-md-4">
                                        <input type="text" name="kategori" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <button className="btn btn-primary" type="submit">Simpan </button>
                                    &nbsp; <button className="btn btn-primary" type="submit">Cancel </button>

                                </div>

                            </form>
                        </div>
                    </div>


                </div>
            </>} />
    );

}
