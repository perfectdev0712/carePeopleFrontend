import React from "react"
import Box from "@material-ui/core/Box"
import Shifts from "../../worker/worker-home/schedule"

export default function AvailableShifts() {
  return (
    <Box className="worker-home">
        <Shifts />
    </Box>
  )
}