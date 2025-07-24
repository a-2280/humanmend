export default function Test() {
  return (
    <div>
      <form action="https://formspree.io/f/myzpwgnr" method="POST">
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
