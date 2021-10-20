import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from "react";

const Blinking = ({ interval, children }) => {
    const [render, setRender] = useState(true)
    const timerRef = useRef()

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setRender((r) => !r)
        }, interval)
        return () => {
            clearInterval(timerRef.current)
        }
    }, [])

    return render ? (
        <>
            {children}
        </>
    ) : null
};

export default Blinking;

Blinking.propTypes = {
    interval: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}