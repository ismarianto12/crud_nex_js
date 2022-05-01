import Templates from "../../compnents/templates";
import Link from 'next/link'
// import { fetch } from "pos/lexicon";


function Paging({ count }) {

    const a = new Array();

    for (let i = 0; i < count.length; i++) {
        return(
            <>
                <li className="page-item"><a className="page-link" href="#">{i}</a></li>

            </>
        ); 
    } 
}
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
                        <table className="table">
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
                                    props.map((a) => (
                                        <>
                                            <tr>
                                                <td>
                                                    {a.title}
                                                </td>
                                                <td>
                                                    {a.title}
                                                </td>
                                                <td>
                                                    {a.title}
                                                </td>
                                                <td>
                                                    {a.title}
                                                </td>
                                            </tr>

                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>

                                <Paging count={12} />
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>

                            </ul>
                        </nav>

                    </div>
                </div>
            </>
        } />
    );
}
export async function getStaticProps(context) {

    const url = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
    const props = await url.json(url);
    return {
        props: { props }
    }
}