import footerLogo from '../assets/images/png/footer-logo.webp'

const Footer = () => {
    return (
        <>
            <footer className='py-[40px]'>
                <div className="max-w-[min(1140px,100%-24px)] mx-auto flex items-center justify-between">
                    <a href="/"><img src={footerLogo} alt="KodeDen" className='w-[91px] h-[73px]' /></a>
                    <a href="/" className='text-[#b4b4b4]'>Privacy Policy | Terms of Service | Cookie Policy</a>
                </div>
            </footer>
        </>
    )
}

export default Footer