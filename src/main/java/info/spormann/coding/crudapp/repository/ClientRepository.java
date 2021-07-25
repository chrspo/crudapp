package info.spormann.coding.crudapp.repository;

import info.spormann.coding.crudapp.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
