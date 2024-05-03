const Exponent = ({ num, exponent, multiplicationOutput }) => {
    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{num}<sup>{exponent}</sup></p>
            <p className="exponent-result">{multiplicationOutput(num, exponent)} = <span className="total">{num ** exponent}</span></p>
        </div>
    )
}

export default Exponent;