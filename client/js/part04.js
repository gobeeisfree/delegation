const contents = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode('.comment_container')


const createComment = (user, value) => {
  const template = /* html */`
  <div class="id" data-comment-id="${Date.now()}">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
    <div class="comment_field">
    <div class="text_container">
      <div class="name"><a href="#">${user}</a></div>
      <div class="text_field">${value}</div>
    </div>
    </div>
  </div>
  `
  return template;
}

const endScroll = (target) => {
  target.scrollTop = target.scrollHeight;
  return target.scrollHeight;
}

const clearContents = (target) => {
  if (target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') {
    target.value = '';
    return;
  }
  target.textContent = '';
}

const handleArticle = (e) => {
  let target = e.target;
  let name = target.dataset.name;

  while (!name) {
    
    target = target.parentElement;

    name = target.dataset.name;

    if (target.nodeName === 'BODY') {
      target = null;
      return;
    }

  }

  if (name === 'like') toggleClass(target, 'active');
  if (name === 'more') toggleClass(target, 'active');
  if (name === 'comment') textField.focus();
  if (name === 'send') {
    e.preventDefault();

    let value = textField.value;

    if (value === '') return;


    insertLast(commentContainer, createComment('나', value));

    endScroll(commentContainer);
    
    clearContents(textField);
  }
 
}



contents.addEventListener('click', handleArticle);