import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import styles from './PwdGen.module.css'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const randomFunc = {
    lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
    number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
    symbol: () => '!@#$%^&*()_+=-{}[]|:;<>?,.'[Math.floor(Math.random() * 24)]
}

export default function PwdGen({ themeProps }) {
    const { ls, darkMode } = themeProps;

    const [password, setPassword] = useState('')
    const [length, setLength] = useState(12)
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    })

    const pagelink = "/pwdgen"
    const navigate = useNavigate()
    const location = useLocation()
    const handleNav = () => {
       navigate(location.pathname === pagelink ? "/" : pagelink)
    }

    const generatePassword = useCallback(() => {
        const { uppercase, lowercase, numbers, symbols } = options

        if (!uppercase && !lowercase && !numbers && !symbols) {
            alert('Please select at least one option')
            return
        }

        const typesArr = [
            { checked: lowercase, func: randomFunc.lower },
            { checked: uppercase, func: randomFunc.upper },
            { checked: numbers, func: randomFunc.number },
            { checked: symbols, func: randomFunc.symbol }
        ].filter(type => type.checked)

        let generatedPassword = ''
        for (let i = 0; i < length; i++) {
            const funcIdx = Math.floor(Math.random() * typesArr.length)
            generatedPassword += typesArr[funcIdx].func()
        }

        setPassword(generatedPassword)
    }, [length, options])

    const copyToClipboard = async () => {
        if (!password) return
        try {
            await navigator.clipboard.writeText(password)
        } catch (err) {
            console.error('Failed to copy password:', err)
        }
    }

    const handleCancel = () => {
      copyToClipboard()
      // handleNav()
      window.close();
   }

    useEffect(() => {
        generatePassword()
    }, [length, options, generatePassword])

    return (
        <div className={styles.container}>
          <h4
             className={styles.title}>Password Generator</h4>
            <div className={styles['password-box']}>
                <input
                    type="text"
                    value={password}
                    readOnly
                />
             <Button sx={{ backgroundColor: "#0066cc !important", textTransform: "none", padding: 0, fontSize: "12pt", fontWeight: 400, }} type="button" variant="contained" size="small" color="primary" onClick={copyToClipboard}>Copy</Button>
            </div>
            <div className={styles.options}>
                <div className={styles['length-control']}>
                    <label>
                        Password Length:
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(Math.max(4, Math.min(32, Number(e.target.value))))}
                            min="4"
                            max="32"
                        />
                    </label>
                    <input
                        type="range"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        min="4"
                        max="32"
                    />
                </div>
                <div className={styles.checkboxes}>
                    {Object.entries(options).map(([key, value]) => (
                        <label key={key}>
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={() => setOptions(prev => ({
                                    ...prev,
                                    [key]: !prev[key]
                                }))}
                            />
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                    ))}
                </div>
            </div>
            <br/><br/>

            <Button sx={{ marginLeft: "0px", float: "right" }} variant="contained" size="large" onClick={generatePassword}>&nbsp;&nbsp;Generate Password&nbsp;&nbsp;</Button>
            <Button sx={{ backgroundColor: "#4CAF50 !important", float: "right", marginRight: "28px" }} variant="contained" size="large" onClick={handleCancel}>Done</Button>

        </div>
    )
}

PwdGen.propTypes = {
    themeProps: PropTypes.shape({
        ls: PropTypes.object.isRequired,
        darkMode: PropTypes.bool.isRequired,
    }).isRequired,
}