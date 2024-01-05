import classes from './Post.module.css'

export function Post(probs) {
    console.log(probs)
    const postTitle = 'This is a example Post!'
    const postMessage = 'With a example Message'

  return (
    <div className={classes.post}>
        <h2>{probs.title}</h2>
      <p>{probs.message}</p>
    </div>
  );
}
