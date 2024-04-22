export default function Issues() {
  return (
    <aside style={{ background: "#FFFFE0", margin: "3rem 0", padding: "1rem" }}>
      <h2>Navigation issues observed</h2>
      <h3>
        ✅ Working as expected (since we're staying within app router layout)
      </h3>
      <ul>
        <li>/a → /b</li>
        <li>/b → /a</li>
      </ul>
      <h3>
        ⚠️ Causing full-reload (likely unavoidable because we're switching
        between app router and page router layouts)
      </h3>
      <ul>
        <li>/ → /a</li>
        <li>/a → /x</li>
      </ul>
      <h3>❌ Unexpected full-reload</h3>
      <p>
        The following route transitions cause an unexpected full page reload{" "}
        <em>only</em> when the <code>app/</code> directory is present AND when a
        middleware is used to rewrite the pathname.
      </p>
      <ul>
        <li>/ → /x</li>
        <li>/x → /y</li>
      </ul>
    </aside>
  );
}
