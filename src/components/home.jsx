import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, fetchMessages } from '../thunks/messagesThunks';
import { createNotification, deleteNotification } from '../thunks/notificationThunks';
import { enqueueMessage, dequeueMessage } from '../thunks/messageQueueThunks'
import { sendDirectMessage, fetchDirectMessages } from '../thunks/directMessageThunks';


function Home() {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages);
    const queue = useSelector(state => state.messageQueue);
    const notifications = useSelector(state => state.notifications);
    const directMessages = useSelector(state => state.directMessages);

    const [newMessage, setNewMessage] = useState('');
    const [dmRecipient, setDmRecipient] = useState('');
    const [dmContent, setDmContent] = useState('');


    useEffect(() => {
        dispatch(fetchMessages()),
        dispatch(fetchDirectMessages());
    }, [dispatch]);

    const handlePostMessage = () => {
        if (!newMessage.trim()) return;
        const msg = { content: newMessage, timestamp: new Date().toISOString() };
        dispatch(createMessage(msg));
        dispatch(createNotification(`Nuevo mensaje publicado`));
        setNewMessage('');
    };
    const handleSendDM = () => {
        if (!dmRecipient.trim() || !dmContent.trim()) return;

        dispatch(sendDirectMessage(dmRecipient, dmContent));
        setDmRecipient('');
        setDmContent('');
    };


    const handleSendDirectMessage = () => {
        const dm = { to: "alguien@uao.edu.co", message: "Mensaje directo", timestamp: new Date().toISOString() };
        dispatch(enqueueMessage(dm));
    };

    const handleProcessQueue = () => {
        if (queue.length > 0) {
            dispatch(dequeueMessage());
            dispatch(createNotification("Mensaje directo enviado"));
        }
    };

    const handleRemoveNotification = () => {
        if (notifications.length > 0) {
            dispatch(deleteNotification());
        }
    };

    return (
        <div>
            <h2>Inicio</h2>

            <div>
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Escribe un mensaje"
                />
                <button onClick={handlePostMessage}>Publicar</button>
            </div>

            <div>
                <h2>📚 Publicaciones</h2>
                {messages.map((msg) => (
                    <div key={msg.id} style={{ marginBottom: '10px' }}>
                        <strong>Publicación de '{msg.senderEmail}'</strong>
                        <p>{msg.content}</p>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 20 }}>
                <h3>📤 Enviar mensaje directo</h3>
                <input
                    type="email"
                    placeholder="Correo del destinatario"
                    value={dmRecipient}
                    onChange={(e) => setDmRecipient(e.target.value)}
                    style={{ width: '100%', marginBottom: 10 }}
                />
                <input
                    type="text"
                    placeholder="Escribe tu mensaje"
                    value={dmContent}
                    onChange={(e) => setDmContent(e.target.value)}
                    style={{ width: '100%', marginBottom: 10 }}
                />
                <button onClick={handleSendDM}>Enviar mensaje directo</button>
            </div>
            <div style={{ marginTop: 20 }}>
                <h3>📨 Cola de mensajes directos: {queue.length}</h3>
                <button onClick={handleSendDirectMessage}>Agregar a la cola</button>
                <button onClick={handleProcessQueue}>Procesar cola</button>
            </div>

            <div style={{ marginTop: 20 }}>
                <h3>🔔 Notificaciones</h3>
                {notifications && notifications.length > 0 ? (
                    notifications.map((notif, index) => (
                        <div key={index}>
                            <p>🔔 {notif.text}</p>
                            <small>{notif.timestamp}</small>
                        </div>
                    ))
                ) : (
                    <p>No hay notificaciones.</p>
                )}
                <button onClick={handleRemoveNotification}>Eliminar notificación</button>
            </div>

        </div>
    );
}

export default Home;
