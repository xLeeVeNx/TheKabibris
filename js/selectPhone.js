const selectPhone = () => {
  const ul    = document.querySelector('.account .jq-selectbox ul');
  const li    = document.querySelectorAll('.jq-selectbox li');
  const value = document.querySelector('.account__select-value');

  ul.addEventListener('click', event => {
    const target = event.target;

    li.forEach(item => {
      if (target === item) {
        value.textContent = item.textContent.split(' ')[0];
      }
    });
  });
};

selectPhone();