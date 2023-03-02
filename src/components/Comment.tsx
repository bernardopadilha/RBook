import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    console.log('delete comment')

    onDeleteComment(content)
  };

  return (
    <div className="w-[686px] h-[120px] flex mb-9">
      <Avatar src="https://github.com/diego3g.png" hasBorder={false} alt="" />

      <div className="flex-1 pl-4">

        <div className="bg-[#29292E] rounded-lg pt-4 pb-[25px] px-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-white">Bernardo Padilha</strong>
              <time className="text-[#8D8D99] text-sm">
                Publicado há 1 hora
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
              className=" hover:rounded-full hover:bg-red-500 ">
              <Trash size={20} weight="light" color="white" />
            </button>
          </header>

          <p className="text-white pt-4"> {content} </p>
        </div>

        <footer className="flex items-center text-white">
          <button
            onClick={handleLikeComment}
            className="flex w-36 justify-between pt-2">
            <ThumbsUp size={24} weight="light" color="white" className="w-14 rounded-xl hover:bg-primary" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>

  )
}