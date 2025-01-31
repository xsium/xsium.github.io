import cryporing from '../assets/cryporing.png'
export default function PageError(){
    return (
        <>
        <h1 className='text-center'>404 Page Not Found</h1>
        <p className='text-center'>you made the poring cry!</p>
        <img className='w-25 mx-auto' src={cryporing} alt="poring crying" />
        </>
    ); 
}