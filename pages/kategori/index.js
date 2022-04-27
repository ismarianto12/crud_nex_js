import Templates from "../../compnents/templates";
import Link from 'next/link'



export default function Kategori({ props }) {

    return (
        <Templates container={
            <>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Master Kategori</div>
                    </div>
                    <div className="card-body">
                        <div className="card-sub">
                            <Link href="kategori/add"><a className="btn btn-primary">Tambah kategori</a></Link>
                        </div>
                        <table className="table responsive">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.map((props) => (
                                        <tr>
                                            <td>
                                                {props.title}

                                            </td>

                                            <td>
                                                {props.title}

                                            </td>

                                            <td>
                                                {props.title}

                                            </td>
                                            <td>
                                                {props.title}

                                            </td>
                                        </tr>


                                    ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        } />
    );
}

export async function getStaticProps(context) {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const props = await res.json();
    return {
        props: {
            props,

        }, // will be passed to the page component as props
    }
}