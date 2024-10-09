import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="w-full sm-md-md:w-[85%] sm-md:w-full lg:w-[59%] flex flex-col gap-6 border-r border-slate-800">
      <CreatePost />
      <Posts />  
    </div>
  );
}
