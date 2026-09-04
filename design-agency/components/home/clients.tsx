
import { Marquee } from "@/components/ui/marquee"

import {
  ClaudeAIWordmark,
  CursorWordmark,
  GithubWordmark,
  GoogleGeminiWordmark,
  GoogleWordmark,
  GrokWordmark,
  OpenAIWordmark,
  ReplicateWordmark,
} from "@designali/logos"

export function Clients() {
  return (
    <div className="flex w-full mt-20 flex-col items-center justify-center">
      <div className="w-full -z-20 overflow-hidden">
        <Marquee
          fade
          gap="70px"
          className="w-full"
        >
          <OpenAIWordmark size={100} />
          <ClaudeAIWordmark size={100} />
          <ReplicateWordmark size={100} />
          <CursorWordmark size={100} />
          <GoogleGeminiWordmark size={90} />
          <GithubWordmark size={90} />
          <GrokWordmark size={100} />
          <GoogleWordmark size={100} />
        </Marquee>
      </div>
    </div>
  )
} 
