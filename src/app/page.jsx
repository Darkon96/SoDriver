import BackgroundImg from "@/components/background";

export default function Home() {
  return (
    <main>
      <BackgroundImg />
      <div className="grid grid-cols-12 grid-rows-9 gap-x-4  absolute inset-0" style={{ 'padding': '0px 5% 0px 5%'}}>
          <div className="col-span-5 row-span-1 h-screen">
            <h1 className="text-7xl font-bold mb-5">ТРЕЗВЫЙ ВОДИТЕЛЬ</h1>
            <h2 className="text-2xl font-bold text-gray-400 text-nowrap">по <span className="text-3xl">Москве</span><br/> и <span className="text-3xl text-nowrap">Московской обл.</span>
              <span className=" ml-4 text-4xl align-bot">24/7</span>
            </h2>
        </div>
      </div>
    </main>
  );
}
