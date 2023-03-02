import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

// author: {avatar_url:"", name "", role: "" }
//publishedAt: Date
//content: String 

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post mto bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);


  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    });

    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    < div className="w-full bg-[#202024] py-10 px-10 rounded-lg mb-8" >

      <header className="text-white flex justify-between items-center pb-6">

        <div className="flex">
          <Avatar src={author.avatarUrl} hasBorder />
          <div className="pl-4">
            <h6 className="font-bold text-base">
              {author.name}
            </h6>

            <p className="text-[#8D8D99] text-sm">
              {author.role}
            </p>
          </div>

        </div>

        <time className="text-[#8D8D99] text-sm">
          {publishedDateFormatted}
        </time>
      </header>

      <div className="text-white">
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content} className="pb-3">{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content} className="pt-3"><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <footer
        className="border-t-[1px] border-solid border-[#323238]  mt-5 pt-5 px-6 w-full">
      </footer>

      <form onSubmit={handleCreateNewComment} className="">
        <h6 className="text-white pb-4">Deixe seu feedback</h6>

        <textarea
          value={newCommentText}
          placeholder="Digite aqui..."
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
          className="bg-body border-[1px] text-white rounded-lg border-none resize-none w-full h-[82px] pl-2">
        </textarea>


        <button
          disabled={newCommentText.length === 0}
          className={`h-[50px] w-[100px] rounded-lg bg-primary text-white mt-4 hover:bg-white hover:text-primary duration-300`}>
          Publicar
        </button>
      </form>

      <div className="pt-8">
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}

      </div>

    </div >
  )
}
