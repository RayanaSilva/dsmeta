import inconNotification from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={inconNotification} alt="Enviar Notificação" />
        </div>
    )
}

export default NotificationButton