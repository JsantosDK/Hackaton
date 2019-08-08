package org.academiadecodigo.bootcamp.hackaton;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RestProfileRepository extends CrudRepository<Profile, Integer> {
}
