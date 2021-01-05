import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function Link({ href, childeren, activeIcon, inactiveIcon, ...rest }) {
  const router = useRouter()

  const isActive = router.pathname === href

  let iconComponent
  if (isActive) {
    iconComponent = activeIcon
  } else {
    iconComponent = inactiveIcon
  }

  return (
    <NextLink href={href} {...rest}>
      <a className="flex w-1/4 py-2 text-center items-center justify-center">
        {iconComponent}
      </a>
    </NextLink>
  )
}
