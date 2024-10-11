import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6 border-r border-slate-800">
      <CreatePost />
      <Posts />  
    </div>
  );
}
