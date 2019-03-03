import React from 'react'
import styled from 'styled-components'
import memoizeOne from 'memoize-one'
import { memoize } from 'lodash'

import getGroupLetter from 'utils/getGroupLetter'
import Ball from './Ball'

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`

type OnPickHandler = (groupNum: number) => void

interface Props {
  completed: boolean,
  possibleGroups: number[] | null,
  onPick: OnPickHandler,
}

const getHandlerUnmemoized = (onPick: OnPickHandler) =>
  memoize((groupNum: number) => () => {
    onPick(groupNum)
  })

const getHandler = memoizeOne(getHandlerUnmemoized)

const GroupBowl = ({
  completed,
  possibleGroups,
  onPick,
}: Props) => {
  const getOnPick = getHandler(onPick)
  return (
    <Root>
      {!completed && possibleGroups &&
        possibleGroups.map(groupNum => (
          <Ball onClick={getOnPick(groupNum)}>
            {getGroupLetter(groupNum)}
          </Ball>
        ))
      }
    </Root>
  )
}

export default GroupBowl
