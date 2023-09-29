import AddTask from "../components/addTask";
import Layout from "../components/layout";

export default function NoteBook() {
    return (
        <Layout>
            <div>
                <form>
                    <textarea name="description" id="" cols="100" rows="30"></textarea>
                    <div>
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
