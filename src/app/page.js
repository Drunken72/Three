import BallCanvas from "@/component/Ball"
import { docker } from "@/assets"
const App = () => {
  return (
    <div className="bg-white text-black ">
      <div className="flex flex-row h-[100vh]">
        <div className="w-1/2 pl-10 pb-10 gap-5 h-[100vh] flex flex-col justify-center">
          <div>
            <h1 className="text-7xl font-extrabold ">Align Items</h1>
          </div>
          <div>
            Utilities for controlling how flex and grid items are positioned along a container's cross axis.
            <br />
            Tailwind lets you conditionally apply utility classes in different states using variant modifiers.
          </div>

        </div>
        <div className="w-1/2" >
          <BallCanvas icon='./docker.png' />
        </div>
      </div>

    </div>
  )
}

export default App