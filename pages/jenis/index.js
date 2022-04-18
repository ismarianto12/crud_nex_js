import Templates from "../../compnents/templates";
import Link from 'next/link'
export default function Jenis() {

    return (
        <Templates container={
            <>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Master data barang</div>
                    </div>
                    <div className="card-body">
                        <div className="card-sub">
                            <Link href="barang/add"><a className="btn btn-primary">Tambah</a></Link>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        } />
    );
}