/** @jsx jsx */
import { Link } from 'gatsby'
import { Badge, Flex, jsx, Text } from 'theme-ui'

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Flex sx={{ flexWrap: 'wrap', mx: -1, alignItems: 'center' }}>
      {tags.map((tag) => (
        <Link key={`tag-${tag}`} to={`/:${tag}:`}>
          <Badge
            variant="tag"
            sx={{
              m: 1,
              py: '0.5em',
              px: '1em',
              borderRadius: '1em',
            }}>
            <Text>{tag}</Text>
          </Badge>
        </Link>
      ))}
    </Flex>
  )
}

export default Tags
