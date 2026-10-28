import type { TopicContent } from "./types"
import { s1 } from "./s1"
import { s2 } from "./s2"
import { s3 } from "./s3"
import { s4 } from "./s4"
import { s5 } from "./s5"
import { s6 } from "./s6"

export type { Material, MaterialKind, TopicContent } from "./types"

// Um arquivo por seção do roadmap, chaveado pelo id do tópico.
export const topicContent: Record<string, TopicContent> = { ...s1, ...s2, ...s3, ...s4, ...s5, ...s6 }
