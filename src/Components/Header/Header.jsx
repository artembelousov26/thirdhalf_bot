import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div>
            <div className={'header'}>
                <Button onClick={onClose}>Закрыть</Button>
                <span className={'username'}>
                    {user?.username}
                </span>
            </div>
            <div className={'text'}>
                <p>Третий Тайм - паб-квиз о футболе!</p>
                <p>Собираемся командами от 3 до 10 человек, отвечаем на вопросы и наслаждаемся атмосферой великой игры.</p>
                <p>Когда? 18.09.2023, 19:00 "Белый Лев", проспект Машерова, 17/3</p>
                <p>Стоимость участия - 10 рублей с человека.</p>
            </div>
        </div>
    );
};

export default Header;
