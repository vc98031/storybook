// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Use `A` to provide a regular link
 */
const A = styled('a')({
  margin: '8px 0',
  outline: 'none',
});

A.displayName = 'Link';
A.defaultProps = {
  children: 'This is a link',
};

A.propTypes = {
  /** That should be the clickable element */
  children: PropTypes.node.isRequired,
};
export default A;

export const component = A;
