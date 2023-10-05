import style from './Taccident.module.css';

const TaccidentNav = ({ title, c, sel, setSel }) => {

    const handleClick = (item) => {
        setSel(item);
    }

    let liTag = c.map((item, idx) => {
        return (
            <li key={`li${idx}`}><button className={item === sel ? style.bt1 : style.bt2} onClick={() => handleClick(item)} >{item}</button></li>
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
