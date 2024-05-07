const parentTable = document.querySelector('.table-result');
const toastList = document.querySelector('.toast');
const submitForm = document.querySelector('.submit-form');

const submit = () => {
  const childTable = document.createElement('tr');

  childTable.innerHTML = `<tr>
  <td class="table">${this.title.value}</td>
  <td class="table">${this.title2.value}</td>
<td onclick="javascript:removeItem(event);">X</td>
</tr>`;

  parentTable.appendChild(childTable);

  const toast = document.createElement('div');
  toast.setAttribute('class', 'toast-element');
  toast.innerText = `${this.title.value} 책이 추가되었습니다.`;
  toastList.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
  submitForm.reset();
};

const removeItem = (event) => {
  const targetParent = event.target.parentElement;
  targetParent.remove();

  console.log(targetParent);

  const toast = document.createElement('div');
  toast.setAttribute('class', 'toast-element');
  toast.innerText = `${event.target} 책이 삭제되었습니다.`;
  toastList.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
};
