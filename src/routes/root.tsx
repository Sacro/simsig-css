export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>SimSig CSS Tester</h1>
        <nav>
          <ul>
            <li>
              <a href={`/show-timetable`}>Show Timetable</a>
            </li>
            <li>
              <a href={`/simplifier`}>Simplifier</a>
            </li>
            <li>
              <a href={`/train-list`}>Train List</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  )
}
