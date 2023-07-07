import './contact.css'

const Contact = () => {
  return (
    <section>
        <div className="smart__contact">
            <h1>contato</h1>
            <form className="smart__contact-form">
                <input type="text" id="name" name="nome" placeholder="Nome" />
                <input type="email" id="email" name="email" placeholder="E-mail" />
                <textarea name="msg" placeholder="O que você precisa?"></textarea>
                <button type="submit">solicitar orçamento</button>
            </form>
        </div>
    </section>
  )
}

export default Contact