import style from './Taccident.module.css';

const TaccidentNav = ({ title, c, setSel }) => {

    const handleClick = (item) => {
        setSel(item);
    }

    let liTag = c.map((item, idx) => {
        return (
            <li key={`li${idx}`}><button onClick={() => handleClick(item)} className={style.bt}>{item}</button></li>
        );
    });

    return (
        <nav>
            <ul>
                <li><strong>{title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    );
}

export default TaccidentNav;
