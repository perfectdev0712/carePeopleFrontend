import React from "react"
import Box from "@material-ui/core/Box"
import Shifts from "../../worker/job"

export default function AvailableShifts() {
  return (
    <Box className="worker-dashboard">
        <Shifts />
    </Box>
  )
}