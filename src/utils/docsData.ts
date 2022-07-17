import {Docs} from '@prisma/client';

export type DocsData = Omit<Docs, "id">;