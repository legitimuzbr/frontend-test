import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Chat() {
  return (
    <div className="flex flex-col w-full max-w-sm border border-slate-200 border-gray-200 rounded-lg overflow-hidden dark:border-slate-800">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <Avatar className="w-8 h-8">
            <img
              alt="Logo"
              height="40"
              src="/logo.png"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </Avatar>
          <h1 className="text-xl font-bold">Legitimuz Chatbot</h1>
        </div>
      </header>
      <div className="flex flex-col p-4 overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
            Olá, bem vindo ao chatbot da Legitimuz 👋
          </div>
          <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
            Esse será o seu teste!
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <img
            alt="Avatar"
            className="rounded-full"
            height="30"
            src="/logo.png"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="30"
          />
          <div className="flex-1">
            <div className="rounded-lg border border-slate-200 p-4 text-sm dark:border-slate-800">
              Olá, estou interessado na vaga.
            </div>
          </div>
        </div>
        <form className="flex items-center gap-4 border-t p-4">
          <Input className="flex-1 min-w-0" placeholder="Digite sua mensagem aqui..." />
          <Button className="rounded-full w-10 h-10" type="submit">
            <SendIcon className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
