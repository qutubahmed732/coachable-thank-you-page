import hook from "../assets/desktop/hook.jpg";

function Secondsection() {
  return (

    <section className="flex flex-col items-center justify-center h-auto p-8 md:p-12 bg-no-repeat bg-cover bg-center text-center" style={{backgroundImage: `url(${hook})`}}>
        <p className='text-xl md:text-4xl text-white font-semibold pb-2 md:pb-10 px-8 md:px-0'>Most people paste the prompt... then get stuck.</p>
        <h1 className='text-2xl md:text-6xl text-white font-bold max-w-5xl mx-auto text-balance'>HERE'S HOW TO ACTUALLY TURN IT INTO <span className='text-emerald-300'>CASHFLOW IN 10 DAYS.</span></h1>
    </section>
    
  )
}

export default Secondsection;