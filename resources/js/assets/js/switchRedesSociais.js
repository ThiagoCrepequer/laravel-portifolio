import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineMail
} from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export function switchRedesSociais(redeSocial) {
    switch (redeSocial.toLowerCase()) {
        case 'facebook':
            return FaFacebookF;
        case 'instagram':
            return AiOutlineInstagram;
        case 'github':
            return AiOutlineGithub;
        case 'linkedin':
            return FaLinkedinIn;
        case 'twitter':
            return AiOutlineTwitter
        case 'email':
            return AiOutlineMail
        case 'telefone':
            return BsTelephone
    }
}