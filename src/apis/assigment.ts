import { DeleteAssignmentsResType, GetAssignmentsResType } from '~/schemaValidations/assignment.schema'
import http from '~/utils/http'

const assignmentApiRequest = {
  getAllAssignment: () => http.get<GetAssignmentsResType>('/assignment/all'),
  deleteAssignment: ({ id }: { id: string }) => http.delete<DeleteAssignmentsResType>(`/assignment/${id}`)
}

export default assignmentApiRequest
