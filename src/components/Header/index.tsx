import {useState} from "react"
import { HeaderMob } from "../HeaderMob";
import { HeaderDesk } from "../HeaderDesk";


export function Header(){
    const [menuIsVisible, setIsMenuVisible] = useState(false)

    return(
        <>
        <HeaderMob
        menuIsVisible={menuIsVisible}
        setIsMenuVisible={setIsMenuVisible}
        />
        <HeaderDesk
        menuIsVisible={menuIsVisible}
        setIsMenuVisible={setIsMenuVisible}
        />
        </>
    );
}