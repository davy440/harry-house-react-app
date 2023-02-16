import hogwarts from './assets/hogwarts.jpg'

export const Banner = ({setIsShowing}) => {

        return (
        
        <div className="harry__banner absolute h-screen w-screen overflow-hidden flex flex-col justify-center items-center before:absolute before:bg-black/10
        before:w-full before:h-full before:z-10">
            <div className="star-five"></div>
            <div className='harry__banner--image'>
                <img
                    src={ hogwarts }
                    className='absolute w-full object-cover -z-1 h-full left-0 top-0 object-top anim-scale'
                    alt="Welcome to Hogwarts"
                />
            </div>
            <h2
                className='harry__banner--title text-center text-white relative z-20 anim-glow font-harry' >
                Welcome to Hogwarts!
            </h2>
            <button
                type='button'
                className='relative z-20 btn btn-primary'
                onClick={() => setIsShowing( () => false)}
                >
                Find your House
            </button>
        </div>
        )
        
}