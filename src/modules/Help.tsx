import { Vortex } from "@/components/ui/vortex";

export default function Help() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Help us to manage server cost
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
          API Stack is dedicated to providing valuable resources, but we need your
          support to keep growing. Your generous contributions help us maintain
          servers, improve services, and build a stronger community. Every
          little bit makes a difference—thank you for your support!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-xl text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Donate now
          </button>
        </div>
      </Vortex>
    </div>
  );
}
