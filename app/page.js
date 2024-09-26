
import CreatePost from "./components/CreatePost";

export default function Home() {
  return (
    <div className="w-screen md:w-[59%] sm-md-md:w-[75%] sm-md:w-[80%] lg:w-[46%] flex flex-col gap-6 border-r border-slate-800">
      <CreatePost />

      <div>Post</div>
    </div>
  );
}
