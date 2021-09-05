/** @jsx jsx */
import { Link } from 'gatsby'
import { FaCalendar as DateIcon } from 'react-icons/fa'
import { Box, Card, Flex, Grid, Heading, jsx, Text } from 'theme-ui'
import Tags from './tags'

import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

interface Props {
  title: string
  slug: string
  category: string
  date: Date
  excerpt: string
  tags: string[]
  image?: IGatsbyImageData
}

const PostLink = ({ title, category, slug, date, excerpt, tags, image }: Props) => (
  <Card variant="primary">
    <Link to={slug}>
      <article
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Grid columns={[2, '1fr 200px']}>
          <Box>
            <Link to={`/${category}`}>
              <Text sx={{ fontStyle: 'italic' }}>{category}</Text>
            </Link>
            <header>
              <Heading as="h3">{title}</Heading>
              <time sx={{ color: 'gray', fontSize: 'small' }}>
                <DateIcon sx={{ mr: 1 }} />
                {date}
              </time>
            </header>
            <section sx={{ pb: 2, flex: 1 }}>
              <Text color="text">{excerpt}</Text>
            </section>
            <Flex sx={{ justifyContent: 'flex-end', px: 1 }}>
              <Tags tags={tags} />
            </Flex>
          </Box>
          <GatsbyImage
            image={getImage(image)} alt={title || excerpt}
          />
        </Grid>
      </article>
    </Link>
  </Card>
)

export default PostLink
