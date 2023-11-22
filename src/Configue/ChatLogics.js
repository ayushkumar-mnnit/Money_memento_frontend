export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
// Example adjustment to getSender function
export const getSender = (loggedUser, users) => {
  if (!users || !users[0] || !users[1]) {
    return '..Refresh page if not found'; // Or handle this case according to your logic
  }

  // Ensure that users[0] and users[1] exist before accessing their properties
  return users[0]._id === loggedUser?._id ? users[1].name : users[0].name;
};


export const getSenderFull = (loggedUser, users) => {
  if (!users || users.length === 0) {
    return '..loading'; // or handle this case according to your logic
  }

  // Ensure that users[0] and users[1] exist before accessing their properties
  const sender = users.find(user => user._id !== loggedUser?._id);

  return sender ? sender.name : '';
};
