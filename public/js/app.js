const $app = document.querySelector('#app');

fetch('/api/users')
  .then(response => response.json())
  .then(users => {
    $app.innerHTML = users.map((user, key) => `
      <ul>
        <li>이름: ${user.name}</li>
        <li>나이: ${user.age}</li>
        <li>
          <a href="#" class="view" data-idx="${key}">조회</a>
        </li>
      </ul>
    `).join('\n');

    $app.querySelectorAll('.view').forEach(el => {
      el.addEventListener('click', e => {
        fetch(`/api/user/${e.target.dataset.idx}`)
          .then(response => response.json())
          .then(console.log)
      })
    })
  })