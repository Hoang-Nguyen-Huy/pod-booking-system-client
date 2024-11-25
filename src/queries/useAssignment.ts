import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import assignmentApiRequest from '~/apis/assigment'

export const useGetAllAssignment = () => {
  return useQuery({
    queryKey: ['assignments'],
    queryFn: assignmentApiRequest.getAllAssignment
  })
}

export const useDeleteAssignment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: assignmentApiRequest.deleteAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] })
    }
  })
}

export const useCreateAssignment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: assignmentApiRequest.createAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] })
    }
  })
}
