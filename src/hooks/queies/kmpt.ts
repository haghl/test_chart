import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory'

export const users = createQueryKeys('kmpt', {
  all: null,
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => api.getUser(userId),
  }),
})
