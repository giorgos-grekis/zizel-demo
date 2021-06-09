export default function MobileMenu({show,hide}) {
    return (
        <>
        <div className="mobile-menu">
            <div className="my-5"></div>
            <span onClick={() => hide()}>Close</span>
            <div className="d-flex flex-column">

                <h3>Item1</h3>
                <h3>Item1</h3>
                <h3>Item1</h3>
                <h3>Item1</h3>
                <h3>Item1</h3>
                <h3>Item1</h3>
                <h3>Item1</h3>

            </div>
            
        </div>

        <style jsx>{`
        .mobile-menu{
            position:fixed;
            left: ${show? "0px": '-100%'};
            top:-10px;
            width:100%;
            height:calc(100% + 10px);
            z-index:2500;
            background:white;
            transition:left 0.3s ease-in;
        }
        `}</style>
        </>
    )
}
